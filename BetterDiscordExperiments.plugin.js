/**
 * @name BetterDiscordExperiments
 * @description Enables the experiments tab in discord's settings. - Snippet used by Discord Previews
 * @author Riddim_GLiTCH
 * @version 1.0.5
*/
class experiments
{
    start = () => {
       {let c; webpackChunkdiscord_app.push([[Symbol()],{},r=>c=r.c]); webpackChunkdiscord_app.pop();
        let u = Object.values(c).find(x=>x?.exports?.default?.getUsers).exports.default;
        let m = Object.values(u._dispatcher._actionHandlers._dependencyGraph.nodes);

        u.getCurrentUser().flags |= 1;
        m.find((x)=>x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
        try {m.find((x)=>x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user:{flags: 1}})} catch {};
        m.find((x)=>x.name === "ExperimentStore").storeDidChange();}
    }

    stop()
    {

    }
    
}
module.exports = experiments
