/* Propassist sign-in for the demo accounts.
   This runs entirely in the browser, which suits demo accounts with example data.
   For real customer accounts, replace signIn/current/signOut with a hosted auth
   service (for example Supabase Auth or Firebase Authentication). */
(function(){
  var KEY='propassist-session';
  var DEMO={
    owner:{email:'owner@demo.propassist.co',password:'demo-owner',role:'owner',name:'Demo Owner'},
    tenant:{email:'tenant@demo.propassist.co',password:'demo-tenant',role:'tenant',name:'Jordan Demo'}
  };
  function read(){try{return JSON.parse(localStorage.getItem(KEY)||'null');}catch(e){return null;}}
  window.PropassistAuth={
    DEMO:DEMO,
    current:read,
    signIn:function(email,password){
      email=String(email||'').toLowerCase();
      for(var k in DEMO){var a=DEMO[k];
        if(a.email===email&&a.password===password){
          var s={email:a.email,role:a.role,name:a.name,at:new Date().toISOString()};
          try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){}
          return s;}}
      return null;
    },
    signOut:function(){try{localStorage.removeItem(KEY);}catch(e){}}
  };
})();
