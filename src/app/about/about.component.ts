import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isShow:boolean=false;
  show(){
    this.isShow=!this.isShow;
  }
    card1=[
      {
        img:'https://dsathemes.com/html/martex_1.1/files/images/f_01.png',
        text1:'Cross-Platform',
        text2:'Luctus egestas augue undo ultrice aliquam in lacus congue dapibus'
      },
      {
        img:'https://dsathemes.com/html/martex_1.1/files/images/f_05.png',
        text1:'Effortless Integration',
        text2:'Tempor laoreet augue undo ultrice aliquam in lacusq luctus feugiat'
      },
      {
        img:'https://dsathemes.com/html/martex_1.1/files/images/f_02.png',
        text1:'Engagement Analytics',
        text2:'Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus'
      },
    ]

  card2=[
    {
      img:'../../assets/table2.png',
      text1:'Market Research',
      text2:'Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor'
    },
    {
      img:'../../assets/idea.png',
      text1:'User Experience',
      text2:'Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor'
    },
  ]
  card3=[
    {
      img:'../../assets/card.png',
      text1:'Digital Marketing',
      text2:'Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor'
    },
    {
      img:'../../assets/card2.png',
      text1:'SEO Services',
      text2:'Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor'
    },
  ]
button=[
  {
    btn:"1",
    text1:"Extensions & Addons",
    text2:"Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat"
  },
  {
    btn:"2",
    text1:"Improved Productivity",
    text2:"Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien  quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat"
  },
  {
    btn:"3",
    text1:"Customizable Dashboard",
    text2:"Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat"
  }
]
img1="https://dsathemes.com/html/martex_1.1/files/images/hero-2-img.png"
img2="https://dsathemes.com/html/martex_1.1/files/images/img-06.png"
img3="https://dsathemes.com/html/martex_1.1/files/images/img-13.png"
img4="https://dsathemes.com/html/martex_1.1/files/images/tablet-02.png"
img5="https://dsathemes.com/html/martex_1.1/files/images/img-05.png"
img6="https://dsathemes.com/html/martex_1.1/files/images/img-02.png"
img7="https://dsathemes.com/html/martex_1.1/files/images/dashboard-01.png"

flex=[
  {
    text1:"89k",
    p:"Porta justo integer and velna vitae auctor"
  },
  {
    text1:"76%",
    p:"Ligula magna suscipit vitae and rutrum"
  },
  {
    text1:"4.93",
    p:" Sagittis congue augue egestas an egestas"
  }
]

    imgC1="https://dsathemes.com/html/martex_1.1/files/images/f_06.png"
    textC1="Marketing Integrations"
    pC1="Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero"

    imgC2="https://dsathemes.com/html/martex_1.1/files/images/f_04.png"
    textC2="Enhance Engagement"
    pC2="Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero"

card5=[
  {
    img:"../../assets/logo4.png",
    t1:"  Built-in automation",
    t2:"Quaerat sodales sapien blandit purus primis purus ipsum cubilia laoreet augue luctus and magna dolor luctus egestas an ipsum sapien primis vitae volute and magna turpis"
  },
  {
    img:"../../assets/logo2.png",
    t1:"  Automatic workflows",
    t2:"Quaerat sodales sapien blandit purus primis purus ipsum cubilia laoreet augue luctus and magna dolor luctus egestas an ipsum sapien primis vitae volute and magna turpis"
  },
  {
    img:"../../assets/logo3.png",
    t1:"   Real-time analytics",
    t2:"Quaerat sodales sapien blandit purus primis purus ipsum cubilia laoreet augue luctus and magna dolor luctus egestas an ipsum sapien primis vitae volute and magna turpis"
  }
]
a1="Realize your"
a2="digital potential"
a3="with Martex"
a4="Tempor sapien sodales quaerat ipsum congue ipsum laoreet turpis neque auctor turpis a vitae dolor luctus placerat magna and ligula cursus purus ipsum"
a=[
  {
    t1:"2x",
    t2:"Tempor sapien and Quaert placerat"
  },
  {
    t1:"63%",
    t2:"Ligula suscipit vitae and rutrum turpis"
  }
]

b1="Build a customer-centric "
b2="marketing strategy"
b3="Ligula risus auctor tempus magna feugiat lacinia."

c1="DATA INTEGRATION"
c2="Create a workflow"
c3="that works for you "
c4="Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit"
c5="Enhance your personality"

text=[
  {
    t:"✔ Magna dolor luctus at egestas sapien"
  },
  {
    t:"✔ Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis"
  },
  {
    t:"✔ Volute turpis dolores and sagittis congue"
  }
]

d1="ONE-STOP SOLUTION"
d2=" Smart solutions,"
d3="real-time results"
d4="#Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice ipsum aliquam undo congue dolor cursus congue varius magnis"
d5="#Cursus purus suscipit vitae cubilia magnis diam volute egestas sapien ultrice auctor"
btn=" Get Started Now"

card6=[
  {
    img:"../../assets/b1.png",
    text:"Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice ipsum aliquam undo congue dolor cursus congue varius magnis"
  },
  {
    img:"../../assets/b2.png",
    text:"Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice ipsum aliquam undo congue dolor cursus congue varius magnis Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor"
  }, 
  {
    img:"../../assets/b3.png",
    text:"Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice ipsum aliquam undo congue dolor cursus congue varius magnis"
  }
]
card7=[
  {
    img:"../../assets/b4.png",
    text:"Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice ipsum aliquam undo congue dolor cursus congue varius magnis"
  },
  {
    img:"../../assets/b5.png",
    text:"Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice ipsum aliquam undo congue dolor cursus congue varius magnis "
  }, 
  {
    img:"../../assets/b6.png",
    text:"Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice ipsum aliquam undo congue dolor cursus congue varius magnis Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor"
  }
]
card8=[
  {
    img:"../../assets/b7.png",
    text:"Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice ipsum aliquam undo congue dolor cursus congue varius magnis Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor"
  },
  {
    img:"../../assets/b1.png",
    text:"Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice ipsum aliquam undo congue dolor cursus congue varius magnis "
  }, 
  {
    img:"../../assets/b8.png",
    text:"Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice ipsum aliquam undo congue dolor cursus congue varius magnis"
  }
]

}
