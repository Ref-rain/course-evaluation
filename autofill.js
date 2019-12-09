

// text area 内容填充
textAreas = document.getElementsByTagName('textarea')

for (var i = 0; i < textAreas.length; i++){
    if (textAreas[i].hasAttribute('id')){
        console.log(textAreas[i].getAttribute('id'))
        textAreas[i].placeholder = '这老师讲得很好'
    }
}

// 随机生成单选的选中(优秀，良好，一般)，就不给老师打差评了
radios = 
radios_name_list = ['item_2', 'item_3', 'item_67', 'item_5', 'item_6', 'item_7', 'item_68', 'item_69', 'item_71', 'item_72', 'item_73', 'item_74','item_75','item_77','item_78','item_79','item_80','item_81','item_83', 'item_84','item_85','item_86']
for (var i = 0; i < radios_name_list.length; i++){
    num = 5
    radios = document.getElementsByName(radios_name_list[i])
    for (j = 0; j<radios.length; j++) {
        if (radios[j].value == num) {
            radios[j].checked = true
            break
        }
    }
}

