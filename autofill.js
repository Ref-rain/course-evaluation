
prefix = 'item_'

// text area 内容填充

// 这门课你最喜欢什么
verbs = ['讲得', '教得', '上课']
adjs = ['很有趣, 风趣幽默','生动形象','引人入胜', '很有意思']
text1 = document.getElementsByName(prefix+"14")[0]
verbsIdx = parseInt(Math.random()*verbs.length)
adjsIdx = parseInt(Math.random()*adjs.length)
text1.value = '老师'+verbs[verbsIdx]+adjs[adjsIdx]

// 我认为本课程应从哪些方面需要进一步改进和提高
text2 = document.getElementsByName(prefix+"15")[0]
text2.value = '这门课很不错，再接再厉'

// 我平均每周在这门课程上花费多少小时
text3 = document.getElementsByName(prefix+"16")[0]
hours = parseInt(Math.random()*15)
text3.value = '我平均每周在这门课上花费'+hours+'小时'

// 在参与这门课之前，我对这个学科领域兴趣如何
items = ['有一定了解', '很感兴趣', '有点兴趣','兴趣一般', '不甚了解', '不是很有兴趣', '感觉不好不坏']
text4 = document.getElementsByName(prefix+"17")[0]
itemsIdx = parseInt(Math.random()*items.length)
text4.value = '我对这个学科领域'+items[itemsIdx]

// 我对该课程的课堂参与度（包括出勤、回答问题等）
participant = ['积极回答问题', '表现一般', '积极思考', '较少回答问题']
text5 = document.getElementsByName(prefix+"18")[0]
participantIdx = parseInt(Math.random()*participant.length)
text5.value = '我在课堂上'+participant[participantIdx]

// 随机生成单选的选中(优秀，良好，一般)，就不给老师打差评了

radios_name_list = ['2', '3', '67', '5', '6', '7', '68', '69', '71', '72', '73', '74','75','77','78','79','80','81','83', '84','85','86']

for (var i = 0; i < radios_name_list.length; i++){
    num = parseInt(Math.random()*2.9) + 3
    radios = document.getElementsByName(prefix+radios_name_list[i])
    for (j = 0; j < radios.length; j++) {
        if (radios[j].value == num) {
            radios[j].checked = true
            break
        }
    }
}

 // 第六题
 radios = document.getElementsByName('radio_19')
 num = parseInt(Math.random()*4.9)+20
 for (j = 0; j < radios.length; j++) {
    if (radios[j].id == num) {
        radios[j].checked = true
        break
    }
}

