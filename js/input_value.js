// 读取体温（平热）
let Temperature_Normal = parseFloat(document.getElementById('Ent_Input_Temperature_Normal_String').value);
console.log(Temperature_Normal)

//根据平热随机上下午的体温
Temperature_max = 37.1; // 上限37.1度
limit = 0.3;
// 计算上午的体温 平热 -（随机数 * limit）  随机数：0~1的小数  上午比平热低
Temperature_Morning = Temperature_Normal - (Math.random() * limit);
Temperature_Morning = Temperature_Morning >= Temperature_max ? Temperature_max : Temperature_Morning;
// 计算下午的体温 平热 +（随机数 * limit）  随机数：0~1的小数  上午比平热高
Temperature_Afternoon = Temperature_Normal + (Math.random() * limit);
Temperature_Afternoon = Temperature_Afternoon >= Temperature_max ? Temperature_max : Temperature_Afternoon;

// 是否随机时间
random_time = true;
if (random_time) {
    Time_Morning = Math.round( Math.random() * 11 ) // 0点~11点
    Time_Afternoon = Math.round( Math.random() * 11 ) + 12 // 12点~23点
} else {
    Time_Morning = 8;
    Time_Afternoon = 20;
}
// 填写时间
time_selected('Ent_Input_Temperature_1_Time',Time_Morning);
time_selected('Ent_Input_Temperature_2_Time',Time_Afternoon);

// 写入体温
document.getElementById('Ent_Input_Temperature_1_String').value = Temperature_Morning.toFixed(1);
document.getElementById('Ent_Input_Temperature_2_String').value = Temperature_Afternoon.toFixed(1);

// 确认项目全部false
let check_list = [ // 要确认的标签ID
    'Ent_Input_Check_1',
    'Ent_Input_Check_2',
    'Ent_Input_Check_3',
    'Ent_Input_Check_4',
    'Ent_Input_Check_5',
    'Ent_Input_Check_6',
    'Ent_Input_Check_7',
    'Ent_Input_Check_8',
    'Ent_Input_Check_9',
    'Ent_Input_Check_10',
    'Ent_Input_Check_11',
    'Ent_Input_Check_12',
    'Ent_Input_Check_13',
    'Ent_Input_Check_14',
    'Ent_Input_Check_15',
];

for (check_id=0; check_id<check_list.length; check_id++){
    document.getElementById(check_list[check_id]).value = "False";
}

// 提交表单
form_item = document.getElementsByClassName('form-horizontal');
for (num=0; num<form_item.length; num++){
    form_item[num].submit();
}


function time_selected(select_id, time){
    let select = document.getElementById(select_id);  

    for (var i = 0; i < select.options.length; i++){
        if (select.options[i].value == time){
            select.options[i].selected = true;
            break;
        }
    }
}

