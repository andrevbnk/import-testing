
export default function useState(){

    async function getAllAction(){
        const res = await import(
            /* webpackChunkName: "About" */
            /* webpackPrefetch: true */
            /* webpackPreload: true */
            /* webpackExports */
            './actions'
        );
        console.dir(res);
        return res;
    }

    return {getAllAction};
}