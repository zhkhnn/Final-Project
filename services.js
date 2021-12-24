function change(element) {
    var a = element.innerHTML;
    switch (a) {

        case "Гинекология":
            document.getElementById("title_info").innerHTML = "Гинекология – это область медицины, которая изучает анатомо-физиологические, физические особенности женского организма в различные возрастные периоды, заболевания женской половой системы, методы их профилактики, диагностики и лечения. Кроме того гинеколог помогает женщине в планировании семьи и подборе контрацепции.";            
            document.getElementById("ser_item").src = "https://images.pexels.com/photos/6074939/pexels-photo-6074939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
            break;
        case "Кардиология":
            document.getElementById("title_info").innerHTML = "Кардиология — обширный раздел медицины, занимающийся изучением сердечно-сосудистой системы человека: строения и развития сердца и сосудов, их функций, а также заболеваний, включая изучение причин их возникновения, механизмов развития, клинических проявлений, вопросов диагностики, а также разработку эффективных методов их лечения и профилактики.";
            document.getElementById("ser_item").src = "https://images.pexels.com/photos/5206948/pexels-photo-5206948.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
            break;
        case "Диагностика":
            document.getElementById("title_info").innerHTML = "Медицинская диагностика — процесс установления диагноза, то есть заключения о сущности болезни и состоянии пациента, выраженное в принятой медицинской терминологии. Этим же термином называется и раздел клинической медицины, изучающий содержание, методы и последовательные ступени процесса распознавания болезней или особых физиологических состояний."
            document.getElementById("ser_item").src = "https://images.pexels.com/photos/6303712/pexels-photo-6303712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
            break;
        case "Травматология":
            document.getElementById("title_info").innerHTML = "Травматология — раздел медицины, изучающий воздействие на организм человека различных травмирующих воздействий, последствия травм, методы их лечения. На другом полюсе дифференциальной диагностики находится ревматология.К терапевтическим методам относятся различные повязки и методы иммобилизации повреждённого участка. "
            document.getElementById("ser_item").src = "https://images.pexels.com/photos/7723513/pexels-photo-7723513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
            break;
        case "Эндокринология":
            document.getElementById("title_info").innerHTML = "Эндокринология — наука о строении и функции желёз внутренней секреции (эндокринных желёз), вырабатываемых ими продуктах (гормонах), о путях их образования и действия на организм животных и человека; а также о заболеваниях, вызванных нарушением функции этих желёз или действиями этих гормонов. Эндокринология — одна из наиболее молодых и бурно развивающихся отраслей медицины, занимающаяся лечением заболеваний, связанных с нарушениями в эндокринной системе."
            document.getElementById("ser_item").src = "https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            break;
        case "Неврология":
            document.getElementById("title_info").innerHTML = "Неврология — группа медико-биологических научных дисциплин, которая изучает нервную систему как в норме, так и в патологии. Занимается вопросами возникновения заболеваний центральной и периферической частей нервной системы, а также изучает механизмы их развития, симптоматику и возможные способы диагностики, лечения и профилактики"
           document.getElementById("ser_item").src = "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            break;
    }
}

let burger = document.querySelector(".burger");
burger.addEventListener('click', e => {
    let display = document.querySelector("#mainav");
    let margin = document.querySelector(".home");
    let margin1 = document.querySelector(".container-xl");
    console.log("ASFASF")
    if (display.style.display !== 'none') {
        display.style.display = 'none'
        margin1.style.position = 'relative';
        margin1.style.top = '0';
        margin.style.marginTop = '0';
    } else {
        display.style.display = 'block'
        margin1.style.position = 'relative';
        margin1.style.top = '500px';
        margin.style.marginTop = '500px';
    }
})
