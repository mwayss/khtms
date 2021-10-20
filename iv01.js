try {

    let mscript = document.createElement("script");

    mscript.src = "https://ad.mox.tv/vidverto/js/aries/v1/invocation.js";

    var mnode = document.getElementsByTagName("script")[0];

    mnode.parentNode.insertBefore(mscript, mnode);

    g = document.createElement('div');
    g.setAttribute("id", "mox-4e5df3e2b4c8aa732ceaea194b6a68cc");
    document.body.appendChild(g);

    (() => {
        window.aries = window.aries || {};
        window.aries.v1 = window.aries.v1 || {commands: []};

        const aries = window.aries.v1;

        aries.commands.push(() => {
          const zoneId = '6529';
          const anchor = document.getElementById('mox-4e5df3e2b4c8aa732ceaea194b6a68cc');
          aries.mount(zoneId, anchor, {
            width: 720,
            height: 405,
          });
        });
      })();

} catch(err) {

    console.log("Issue with apply mox video");

}
