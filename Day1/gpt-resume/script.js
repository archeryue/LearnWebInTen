/* script.js */
document.getElementById('save-btn').addEventListener('click', function() {
  var basicInfo = document.getElementById('basic-info').innerText;
  localStorage.setItem('basicInfo', basicInfo);

  var education = document.getElementById('education').innerText;
  localStorage.setItem('education', education);

  var workExperience = document.getElementById('work-experience').innerText;
  localStorage.setItem('workExperience', workExperience);

  alert('保存成功！');
});
