document.getElementById('Is_Consent').checked = true;
form_item = document.getElementsByClassName('form-horizontal');
for (num=0; num<form_item.length; num++){
    form_item[num].submit();
}