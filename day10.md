# Learn about Nginx, deploy the project
 - Nginx is a web server, which can also act as a reverse proxy.
    - Deploy the frontend parts(static files) to the Nginx server
    - Use the reverse proxy to forward the API requests to backend parts(Node.js)

## Nginx Architecture
 - Multi-processes Architecture
    - Master Process: manage worker processes
        - Deal with configs
        - New & Bind Socket & Listen
        - Fork worker processes
    - Worker Processes(1 worker per CPU core): handle the requests
        - Accept connections, Read & Write
 - Event-driven Architecture
    - Use epoll/kqueue to manage the events
    - High performance
```c
int main() {
    server_fd = socket();
    bind(server_fd, address);
    listen(server_fd);

    for (int i = 0; i < num_workers; i++) {
        // worker process
        if (fork() == 0) {
        epoll_fd = epoll_create();
        epoll_ctl(epoll_fd, EPOLL_CTL_ADD, server_fd, EPOLLIN);
        while (1) {
            nfds = epoll_wait(epoll_fd, events, MAX_EVENTS);
            for (int i = 0; i < nfds; i++) {
                if (events[i].data.fd == server_fd) {
                    // new connection
                    client_fd = accept(server_fd);
                    epoll_ctl(epoll_fd, EPOLL_CTL_ADD, client_fd, EPOLLIN);
                } else {
                    // forward the request
                    if (events[i].events & EPOLLIN) {
                        read(events[i].data.fd, buffer);
                        // register a new fd to epoll if the request ask for a new endpoint
                        // register a callback with buffer to forward the request
                    } else if (events[i].events & EPOLLOUT) {
                        // forward the buffer related to the fd
                        write(events[i].data.fd, buffer);
                    }
                }
            }
        }
    }
}
```

## Nginx Configuration
 - [config file for todo-list](deploy/nginx.conf)
 - Nginx Config
    - worker_processes: auto
    - events: worker_connections 1024
 - Http Block
    - Basic Config
        - include: mime.types
        - default_type: application/octet-stream
        - sendfile: on
        - keepalive_timeout: 65
    - Server Block
        - Server Config
            - listen: port
            - server_name: domain name
        - Location Block 1
            - Static Files: root, index, try_files
        - Location Block 2
            - Proxy Pass
            - Proxy Http Version
            - Proxy Set Headers
        - Error Pages