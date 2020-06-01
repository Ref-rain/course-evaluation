
prefix = 'item_'

// text area 内容填充
// 这门课你最喜欢什么
verbs = ['讲得', '教得']
adjs = ['很有趣, 风趣幽默','生动形象','引人入胜', '很有意思']
text1 = document.getElementsByName(prefix+"97")[0]
verbsIdx = parseInt(Math.random()*verbs.length)
adjsIdx = parseInt(Math.random()*adjs.length)
if (text1 != null){text1.value = '老师'+verbs[verbsIdx]+adjs[adjsIdx]+ ", 上课能够活跃气氛"}

// 我认为本课程应从哪些方面需要进一步改进和提高
text2 = document.getElementsByName(prefix+"98")[0]
if (text2 != null){text2.value = '这门课很不错，再接再厉, 希望以后能够有更多的进步'}

// 我平均每周在这门课程上花费多少小时
text3 = document.getElementsByName(prefix+"99")[0]
hours = parseInt(Math.random()*15)
if (text3 != null){text3.value = '我平均每周在这门课上花费'+hours+'小时'}

// 在参与这门课之前，我对这个学科领域兴趣如何
items = ['有一定了解', '很感兴趣', '有点兴趣','兴趣一般', '不甚了解', '不是很有兴趣', '感觉不好不坏']
text4 = document.getElementsByName(prefix+"100")[0]
itemsIdx = parseInt(Math.random()*items.length)
if (text4 != null){text4.value = '在参与这门课之前，我对这个学科领域'+items[itemsIdx]}

// 我对该课程的课堂参与度（包括出勤、回答问题等）
participant = ['表现积极', '表现一般', '表现活跃', '回答较少']
text5 = document.getElementsByName(prefix+"101")[0]
participantIdx = parseInt(Math.random()*participant.length)
if (text5 != null){text5.value = '我出勤完整，在课堂回答问题方面'+participant[participantIdx]}


//radios_name_list = ['2', '3', '67', '5', '6', '7', '68', '69', '71', '72', '73', '74','75','77','78','79','80','81','83', '84','85','86']
radios_name_list = ['88', '89', '90', '92', '93', '94', '95', '96', '116', '117', '118', '119','120','122','123','124','125','126','128', '129','130','131']

for (var i = 0; i < radios_name_list.length; i++){
    num = parseInt(Math.random()*1.9) + 4
    radios = document.getElementsByName(prefix+radios_name_list[i])
    for (j = 0; j < radios.length; j++) {
        if (radios[j].value == num) {
            radios[j].checked = true
            break
        }
    }
}

 // 第六题
 radios = document.getElementsByName('radio_102')
 num = parseInt(Math.random()*4.9)+102
 for (j = 0; j < radios.length; j++) {
    if (radios[j].id == num) {
        radios[j].checked = true
        break
    }
}


// 教师评估

// 随机生成单选的选中(优秀，良好)，就不给老师打差评了
teacher_radio_list = ['133', '134', '136', '137','139', '140', '141', '142','143', '144', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159']

for (var i = 0; i < teacher_radio_list.length; i++){
    num = parseInt(Math.random()*1.9) + 4
    radios = document.getElementsByName(prefix+teacher_radio_list[i])
    for (j = 0; j < radios.length; j++) {
        if (radios[j].value == num) {
            radios[j].checked = true
            break
        }
    }
}

// 这位老师的教学，你最喜欢什么
verbs = ['讲得', '教得']
adjs = ['很有趣, 风趣幽默','生动形象','引人入胜', '很有意思']
text1 = document.getElementsByName(prefix+"145")[0]
verbsIdx = parseInt(Math.random()*verbs.length)
adjsIdx = parseInt(Math.random()*adjs.length)
if (text1 != null){text1.value = '老师'+verbs[verbsIdx]+adjs[adjsIdx]+ ", 上课能够活跃气氛"}

// 您对老师有哪些意见和建议
text1 = document.getElementsByName(prefix+"146")[0]
if (text1 != null){text1.value = '老师讲得很不错，再接再厉, 希望以后能够有讲得更好'}