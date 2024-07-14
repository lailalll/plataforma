
var bt_option = document.getElementById("bt_box");
var all_pages = document.getElementById("all_pages");
var hide_aaaa = document.getElementById("hide_aaaa");
var a3 = document.querySelectorAll(".aaa>a");

var select = document.getElementById("select");
var title_logica = document.getElementById("title_logica");
var pt1 = document.getElementById("paragrapho_logica");
var title_vantagens = document.getElementById("title_vantagens");
var p2 = document.getElementById("paragrapho_logica2");

bt_option.addEventListener("click",(evt)=>{
    all_pages.classList.toggle("outside");
})
hide_aaaa.addEventListener("click",(evt)=>{
    a3.forEach((ele,pos,arr)=>{
        ele.classList.toggle("translatey");
    })
})
// level (1);
var title_tilte = `Lógica de programação`;
var p1 = `A lógica , a parte mais importante pra um programador .
    Mas , o que é isso?  Muito bem, a lógica de programação é o meio
    como você programador vé as coisas , os problemas , as soluções de uma
    forma lógica e funcional em forma computacional. pegou? não😅 , não te preocupes eu também não pegaria! 
    Em outras palavras mais simples : Lógica de programação são apenas raciocinios ou pensamentos 
    inteligentes , com a mistura de conseitos matematicos e racionais !  
    Ainda também podes entender como à analize de como resolver problemas a nossa frente de uma froma racional
    (ou experta), então , conseguio entender agora? mas pessoalmente a gente fala melhor , ok?! `

var subtilte = ` Vantagens `;
let p22 = ` (1) Capacidades mais apurada de resolver questões!
            (2) Adapitação a qualquer caso , novo ou não! 
            (3) Flexiblidade 
            (4) Entendimento mais profundo de como à máquina funciona!
            `; 
// level (2)
var title_tilte_2 = `Desenvolvimento WEB`;
var p1_2 = `    Já ouvio falar ?! não , sim ,  não tepreocupes , é o seguinte : Desenvolvimento web
        é uma área da computação em que se foca em criar de tudo que está na internet e mais... A mesma 
        usa como ferramenta sertas tecnologias que ajudam a ter exito na a mesma área! Nunca pensou o que é tudo 
        aquilo que está aos teus olhos ?! bem, tente o seguinte : click na tecla 'F12' do seu teclado (se está a navegar em um computador)
        vês todas a linhas de código exibido?! é isso oque está debaixo dos panos! Claro que tu irás saber o que é cada coisa que aí está
        . é daqui onde sai os nossos famozos rackers , bem , desde o nível 1 que tu viste! mas em suma é isso o resto é daqui a pouco!   
`;
var subtilte_2 = ` Vantagens `;
let p22_2 = ` (1) Capassidade e conhecimento raro de usar e desenvolver desde aplicações a sistemas web!
                (2) Tornar-se uma experte e manipular a web a teu favor e gosto
                (3) Trabalhar desde o exterior no comforto de sua casa e muito mais
`; 
// level (3)
var title_tilte_3 = ` Aplicação `;
var p1_3 = `
        Muito bem , após o termino dos primeiros níveis , 
        o próximo passo é à aplicação de uma forma geral e profunda
        é aqui onde iremos desenvolver sites diversos ou plataformas web e mobile(para celulares)
        , irás hopeda-los e aprender sobre git hub , uma ferramenta bem conhecida na área.
        També até aqui o teu inglês já estará bem desenvolvido( se seguiste tudo o que foi orientado).
        Nesta fase iremos fazer as pesquisas e completar os requisitos para o mercado de trabalho!
        É nesta fase onde serás reencaminhado para o mercado de trabalho por meios de sinks e também 
        a criação do teu portifólio 100% proficional!
        Então , até já!
`;
var subtilte_3 = ` Vantagens `;
let p22_3 = `
            (1) Poderás estar preparado para o mercado de trabalho!
            (2) Comfiança e capassidade suficiente para testes! 
            (3) 0% de desperdício de tempo e recurso
`; 

let stato = true;
var chamador1 ; 
var chamador2 ; 
var chamador3 ;
var chamador4 ; 
function fechador() {
    clearInterval(chamador1);  
    clearInterval(chamador2);  
    clearInterval(chamador3); 
    clearInterval(chamador4); 
}

function level(level){
    if(level==1){
    if(stato){
        setTimeout(() => {
            stato = false;
            fechador();
            select.innerHTML="";
            title_logica.innerHTML="";
            pt1.innerHTML="";
            title_vantagens.innerHTML="";
            p2.innerHTML="";

            let txt1 = new String(title_tilte);
            let c = 0;
            chamador1 = setInterval(() => {
                if(c<txt1.length){
                    title_logica.innerHTML+=txt1[c];
                    c++;
                }else{
                }
            }, 50);
            
        }, 50);
        setTimeout(()=>{
            let txt1 = new String(p1);
            let c = 0;
            chamador2 = setInterval(() => {
                if(c<txt1.length){
                    pt1.innerHTML+=txt1[c];
                    c++;
                }else{
                }
    
            }, 40);
        },1500);
        setTimeout(()=>{
            let txt1 = new String(subtilte);
            let c = 0;
            chamador3 = setInterval(() => {
                if(c<txt1.length){
                    title_vantagens.innerHTML+=txt1[c];
                    c++;
                }else{
                }
    
            }, 80);
        },30400);
        setTimeout(()=>{
            let txt1 = new String(p22);
            let c = 0;
            chamador4 = setInterval(() => {
                if(c<txt1.length){
                    p2.innerHTML+=txt1[c];
                    c++;
                }else{
                    fechador();
                    stato = true;
                }
            }, 50);

        },33000);
    }else{
        console.log("Bloqueado (1) ");
    }
    }else if(level==2){
        if(stato){
            setTimeout(() => {
                stato = false;
                fechador();
                select.innerHTML="";
                title_logica.innerHTML="";
                pt1.innerHTML="";
                title_vantagens.innerHTML="";
                p2.innerHTML="";
    
                let txt1 = new String(title_tilte_2);
                let c = 0;
                chamador1 = setInterval(() => {
                    if(c<txt1.length){
                        title_logica.innerHTML+=txt1[c];
                        c++;
                    }else{
                        fechador();
                    }
                }, 50);
                
            }, 50);
            setTimeout(()=>{
                let txt1 = new String(p1_2);
                let c = 0;
                chamador2 = setInterval(() => {
                    if(c<txt1.length){
                        pt1.innerHTML+=txt1[c];
                        c++;
                    }else{
                        clearInterval(chamador2);
                    }
        
                }, 40);
            },1500);
            setTimeout(()=>{
                let txt1 = new String(subtilte_2);
                let c = 0;
                chamador3 = setInterval(() => {
                    if(c<txt1.length){
                        title_vantagens.innerHTML+=txt1[c];
                        c++;
                    }else{
                        clearInterval(chamador3);
                    }
        
                }, 50);
            },30400);
            setTimeout(()=>{
                let txt1 = new String(p22_2);
                let c = 0;
                chamador4 = setInterval(() => {
                    if(c<txt1.length){
                        p2.innerHTML+=txt1[c];
                        c++;
                    }else{
                        clearInterval(chamador4);
                        stato = true;
                    }
        
                }, 50);
            },33000);
        }else{
            console.log("Bloqueado (2) ");
        }
    }else if(level==3){
        if(stato){
            setTimeout(() => {
                stato = false;
                select.innerHTML="";
                title_logica.innerHTML="";
                pt1.innerHTML="";
                title_vantagens.innerHTML="";
                p2.innerHTML="";
    
                let txt1 = new String(title_tilte_3);
                let c = 0;
                chamador1 = setInterval(() => {
                    if(c<txt1.length){
                        title_logica.innerHTML+=txt1[c];
                        c++;
                    }else{
                        clearInterval(chamador1);
                        
                    }
        
                }, 50);
                
            }, 50);
            setTimeout(()=>{
                let txt1 = new String(p1_3);
                let c = 0;
                chamador2 = setInterval(() => {
                    if(c<txt1.length){
                        pt1.innerHTML+=txt1[c];
                        c++;
                    }else{
                        clearInterval(chamador2);
                    }
        
                }, 40);
            },1500);
            setTimeout(()=>{
                let txt1 = new String(subtilte_3);
                let c = 0;
                chamador3 = setInterval(() => {
                    if(c<txt1.length){
                        title_vantagens.innerHTML+=txt1[c];
                        c++;
                    }else{
                        clearInterval(chamador3);
                    }
        
                }, 50);
            },30700);
            setTimeout(()=>{
                let txt1 = new String(p22_3);
                let c = 0;
                chamador4 = setInterval(() => {
                    if(c<txt1.length){
                        p2.innerHTML+=txt1[c];
                        c++;
                    }else{
                        clearInterval(chamador4);
                        stato = true;
                    }
        
                }, 50);
            },30900);
        }else{
            console.log("Bloqueado (3) ");
        }
    }


}

var big_photo = document.getElementById("big_img");
var min_photo = document.querySelectorAll(".min_photo");
//big_photo.src='../photos/f2.jpg'
min_photo.forEach((ele)=>{
    ele.addEventListener("mouseover",(evt)=>{
        let src1 = evt.target.src;
        let src2 = ele.getAttribute("src");

        big_photo.setAttribute("src",src2);
    })
})

var desc = document.querySelectorAll(".home_desc");
var sinh = document.querySelectorAll(".info_home");

sinh.forEach((ele)=>{
    ele.addEventListener("mouseover",(evt)=>{
        let ele = evt.target;
        let elemento = ele.parentNode.firstElementChild.nextElementSibling;
        elemento.classList.add("up");
    })
})

sinh.forEach((ele)=>{
    ele.addEventListener("mouseout",(evt)=>{
        let ele = evt.target;
        let elemento = ele.parentNode.firstElementChild.nextElementSibling;
        elemento.classList.remove("up");
    })
})

var level_move = document.getElementById("sec3_leftsd_decriptio");

class Description{
    constructor(deside , father , h2 , p1 , h3 , p22){
        this.father = father;
        this.deside = deside;
        this.box;
        this.h2;
        this.txth2 = h2;
        this.p1;
        this.txtp1 = p1;
        this.h3;
        this.txth3 = h3;
        this.p2;
        this.txtp22 = p22;
    }
    construct(){
        this.box = document.createElement("div"); 
        this.h2 = document.createElement("h2");
        this.p1 = document.createElement("p");
        this.h3 = document.createElement("h3");
        this.p2 = document.createElement("p");

            this.box.style=`
                display:flex;
                width:100%;
                height:100%;
                flex-direction:column;
                justify-content:flex-start;
                align-items:center;
                padding:5px;
            `;
            this.h2.setAttribute("style",`
                width:100%;
                text-align:center;
                color:white;
            `);
            this.h2.innerHTML=this.txth2;

            this.p1.setAttribute("style",` 
                width:100%;
                color:white;
                text-align:start;
            `);
            this.p1.innerHTML=this.txtp1;
            
            this.h3.setAttribute("style",` 
                width:100%;
                color:white;
                text-align:center;
            `);
            this.h3.innerHTML=this.txth3;

            this.p2.setAttribute("style",` 
                width:100%;
                color:white;
                text-align:start;
            `);
            this.p2.innerHTML=this.txtp22;

    }
    insertion(){
        this.box.appendChild(this.h2);
        this.box.appendChild(this.p1);
        this.box.appendChild(this.h3);
        this.box.appendChild(this.p2);

        this.father.innerHTML="";
        this.father.appendChild(this.box);

    }
}
function criador(p){
    if(p==1){
        let h2 = `Nível 01`;
        let p1 = `Nível aprendizado , este nível ou classificação é para pessoas que estão aprocura de um simples tutor.
        Bem em outras palavras : alguém que o ajude no que diz respeito aos estudos correntes!
        Também alguém que crie , desenvolva algum progeto em que na qual há serta dificuldade da sua parte!`;
        let h3 = `Tipos de pedidos`;
        let p22 = `O subtitulo não faz jus a este ponto , pois não há tipos de pedidos, como se excluicemos algum
        na verdade aqui é para reencaminar pedidos de pessoa iniciants na área, queremos dar mais atenção á elas 
        já que pra vós , com mais conhecimento têm outros níveis!`;
        let escrita = new Description(1,level_move,h2,p1,h3,p22);
        escrita.construct();
        escrita.insertion();

    }else if(p==2){
        let h2 = `Nível 02`;
        let p1 = `Nível estudantil , este nível um pouco mais avansado para os colegas que já estão entrando na área,
        vendo fumo?! 😅 espero que não , mas talves sim, só não te preocupes muito , tem alguém que vai bater cabeça por ti! 
            Muito bem , está parte é para progetos escolares em que tu desejas ,ou auxilio ,ou a criação por completo do teu sitema web! 
            pequeno porte , medio porte , grande porte ou até pequenino porte😉 , sem receio. `;
        let h3 = `Tipos de pedidos`;
        let p22 = `Os pedidos que estão em sua mente na parte web , é só mandar ! Lembre: do lado estudantil!`;
        let escrita = new Description(1,level_move,h2,p1,h3,p22);
        escrita.construct();
        escrita.insertion();
    }else if(p==3){
        let h2 = `Nível 03`;
        let p1 = `Nível Lucrativo , o que foi ques te tornar mais proficional?! já imaginaste ter uma loja online ?!
                    se sim, cá está a tua oportunidade , criar um portifólo e deixar 100% online em uma ou mais plataformas web!
                    o que achas de fazer anucios e reencaminhar aos teus sites onde estão apresentados produtos, serviços  diresos?! como está plataforma por exemlo!  
        `;
        let h3 = `Tipos de pedidos`;
        let p22 = `Acredito que a explicação acima já ajudou a ter uma ideia dos tipos de pedidos a fazer , desde os mais 
        simples até os mais complexos , com a finalidade de teres sertos ganhos financeiros ou de outras naturezas , desde
        que consires ganhos!`;
        let escrita = new Description(1,level_move,h2,p1,h3,p22);
        escrita.construct();
        escrita.insertion();
    }
}
var time = 0;
var time_recevide = 9980;
function mov_level(level){
    if(level==1){
        time = time_recevide;
        setTimeout((evt)=>{
            level_move.classList.remove("l123");
        },100);
        setTimeout((evt)=>{
            level_move.classList.add("l123");
            level_move.classList.add("l1");
            level_move.classList.remove("l2");
            level_move.classList.remove("l3");
            criador(1);
            time = time_recevide;
        },2010);
        setTimeout((evt)=>{
            level_move.classList.remove("l123");
        },time);

    }else if(level==2){
        time = time_recevide;
        setTimeout((evt)=>{
            level_move.classList.remove("l123");
        },50);
        setTimeout((evt)=>{
            level_move.classList.add("l123");
            level_move.classList.add("l2");
            level_move.classList.remove("l3");
            level_move.classList.remove("l1");
            criador(2);
            time = time_recevide;
        },2010);
        setTimeout((evt)=>{
            level_move.classList.remove("l123");
        },time);

    }else if(level==3){
        time = time_recevide;
        setTimeout((evt)=>{
            level_move.classList.remove("l123");
        },50);
        setTimeout((evt)=>{
            time = time_recevide;
            level_move.classList.add("l123");
            level_move.classList.add("l3");
            level_move.classList.remove("l2");
            level_move.classList.remove("l1");
            criador(3);
            time =  time_recevide;
        },2010);
         setTimeout((evt)=>{
            level_move.classList.remove("l123");
        },time);
    }

}

var bt_donload = document.getElementById("donload");

bt_donload.addEventListener("click",(evt)=>{
    let pj = window.open("",""," width:800px,height:1000px;");

    let style = `<style> background-color:white; color:white; </style> `;
    let txt = `
    Passo 1: Aprender Fundamentos do Desenvolvimento Web e sem esquecer o mais importante , a lógica.
    HTML/CSS/JavaScript: Domine essas linguagens básicas para criar interfaces web interativas e responsivas.
    
    Frameworks Frontend: Aprofunde-se em pelo menos um framework moderno como React, Angular ou Vue.js.
    Entenda como eles facilitam o desenvolvimento de interfaces de usuário complexas.
    
    Banco de Dados: Aprenda a projetar e 
    interagir com bancos de dados relacionais (como MySQL, PostgreSQL) e não relacionais (como MongoDB).
    
    Passo 2: Desenvolvimento Backend
    JavaScript/Node.js: Use JavaScript no lado do servidor com Node.
    js. Aprenda a construir APIs RESTful e a trabalhar com Express.js para facilitar o desenvolvimento.
    
    Outros Frameworks Backend: Explore outros frameworks como Django (Python), 
    Ruby on Rails (Ruby), Laravel (PHP) para ganhar experiência em diferentes abordagens de backend.
    
    Conhecimentos em Segurança: Compreenda princípios de segurança web,
     como proteção contra ataques CSRF, XSS, e práticas recomendadas de autenticação e autorização.
    
    Passo 3: Banco de Dados e Armazenamento de Dados
    ORM/ODM: Familiarize-se com mapeamento objeto-relacional (ORM) para bancos de dados relacionais e 
    mapeamento objeto-documento (ODM) para bancos de dados NoSQL.
    
    Arquitetura de Banco de Dados: Entenda modelos de dados, 
    normalização, indexação e otimização de consultas para melhorar o desempenho do aplicativo.
    
    Passo 4: Prática e Projetos
    Desenvolvimento de Projetos: Crie projetos full-stack completos, integrando frontend e backend. 
    Exemplos incluem sistemas de gerenciamento de tarefas, blogs, redes sociais simplificadas, entre outros.
    
    Colaboração e Versionamento: Use Git para controle de versão e GitHub (ou outra plataforma similar) 
    para hospedar seus projetos e colaborar com outros desenvolvedores.
    
    Passo 5: Aprendizado Contínuo e Aprofundamento
    Melhores Práticas e Padrões: Mantenha-se atualizado com melhores práticas de desenvolvimento, 
    como design de APIs RESTful, testes automatizados, deploy contínuo (CI/CD) e DevOps.
    
    Especialização: Considere aprofundar-se em áreas específicas como segurança, otimização de desempenho,
     arquitetura de microserviços, entre outros, conforme suas necessidades e interesses.
    
    Recursos Recomendados
    Cursos Online e Tutoriais: Utilize plataformas como Udemy, Coursera, 
    edX, e FreeCodeCamp para cursos específicos em desenvolvimento full-stack.
    
    Leitura e Documentação: Explore a documentação oficial de tecnologias e
     frameworks que você está aprendendo, além de blogs e livros especializados.
    
    Comunidades e Eventos: Participe de grupos de discussão,
     conferências e meetups locais ou online para networking e aprendizado contínuo.
    
    Seguindo esses passos e recursos recomendados, 
    você estará bem encaminhado para se tornar um desenvolvedor full-stack competente e 
    preparado para construir aplicações web completas e funcionais.
        `;

    pj.document.write("<html>");
    pj.document.write("<head>");
    pj.document.write("<title>pdf</title>");
    pj.document.write(style);
    pj.document.write("</head>");
    pj.document.write("<body>");
    pj.document.write(txt);
    pj.document.write("</body>");
    pj.document.write("</html>");

    pj.print();
    pj.close();
})

   class Call{
       constructor(type,pai,who){
        this.tipe=type;
        this.dv;
        this.pai=pai;
        this.who=who;

       }
        contrutor(){
            this.dv = document.createElement("div");
            this.bt = document.createElement("div");
            this.h3 = document.createElement("h3");
            this.p = document.createElement("p");
            this.ul = document.createElement("ul");
            this.li1 = document.createElement("li");
            this.li2 = document.createElement("li");
            this.li3 = document.createElement("li");
            // adicionar conteudo txt aos elementos
            this.h3.innerHTML="Contactar-nos";
            this.p.innerHTML="Esteje avontade para Contactar-nos via estes meios , teremos todo gosto em atender-lo!";
            if(this.who==1){
                this.li1.innerHTML="(+244) 925786916 (whatsap)";
                this.li2.innerHTML="(+244) 941137038 (whatsap)";
                this.li3.innerHTML="(+244) 952097545 (whatsap)";
            }else if(this.who==2){
                this.li1.innerHTML="(+244) 941137038 (chamada)";
                this.li2.innerHTML="(+244) 952097545 (chamada)";
                this.li3.innerHTML="(+244) 952340211 (chamada)";
            }else if(this.who==3){
                this.li1.innerHTML=" quinguri01@gmail.com (email)";
                this.li2.innerHTML=" laila@gmail.com (email)";
                this.li3.innerHTML=" teste@gmail.com (email)";
            }
      
            this.bt.innerHTML="fechar";
            // adicionar as classes
            this.dv.classList.add("numbers");
            this.bt.classList.add("fechar");
            // adicionar licenerr
            this.bt.addEventListener("click",(evt)=>{
                this.dv.remove();
            })
           
       }
       set(){
           this.dv.appendChild(this.h3);  
           this.dv.appendChild(this.p);        
           this.ul.appendChild(this.li1);  
           this.ul.appendChild(this.li2);
           this.ul.appendChild(this.li3);
           this.dv.appendChild(this.ul);
           this.dv.appendChild(this.bt);
           this.pai.appendChild(this.dv);
       }
   }

    function call(p){
        var head = document.getElementById("head");
        if(p==1){
            let call_sms = new Call(1,head,1);
            call_sms.contrutor();
            call_sms.set();
        }else if(p==2){
            let call_sms = new Call(2,head,2);
            call_sms.contrutor();
            call_sms.set();
        }else if(p==3){
            let call_sms = new Call(3,head,3);
            call_sms.contrutor();
            call_sms.set();
        }
    }

    class OFF{
        constructor(){
            this.sms;

        }
        construct(){

            this.sms = "Intem indisponivel até ao momento";
             this.dv = document.createElement("div");
            this.style=`
            border:1px solid skyblue;
            height:100px;
            width:300px;
            display:flex;
            justify-content:center;
            align-intems:center;
            color:white;
            font-size:17px;
            font-weight:bold;
            position:fixed;
            top:40%;
            left:30%;
            z-index:4;
            margin:50 auto;
            background-color:skyblue;
            border-radius:10px;
            `;
            this.dv.setAttribute("style",this.style);
            this.dv.innerHTML=this.sms;
            document.body.appendChild(this.dv);
        }


    }


    var off = [...document.querySelectorAll(".off")]

    off.map((ele,pos)=>{
        ele.addEventListener("click",(evt)=>{
       
            alert("Item indisponivel até ao momento");
        })
    })

    var pv = document.querySelector(".privet");

    pv.addEventListener("click",(evt)=>{
        alert("Sinto muito , acesso restrito!")
    })

// right here

    var nome = document.getElementById("name");
    var sobre = document.getElementById("sobrenome");
    var cell = document.getElementById("contacto");
    var mail = document.getElementById("email");
    var gps = document.getElementById("localidade");
    var send = document.getElementById("send");


    var submit = document.getElementById("form_mail");
    var user = document.getElementById("name_user");
    var email = document.getElementById("email_user");
    var response = document.getElementById("response_user");
    var bt_sub = document.getElementById("bt_sub");

    function sender(){

        sub.preventDefault();

        alert();

        submit.addEventListener("submit",(evt)=>{
            evt.preventDefault();

        user.value=nome.value+" ; Celular : "+cell.value+" ; Localisação : "+gps.value;
        email.value=mail.value;

        bt_sub.click();
    })
      
        
    }
    send.addEventListener("submit",(evts)=>{
        evts.preventDefault()
        sender();
    })

    // donload