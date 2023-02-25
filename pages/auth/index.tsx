import { useStore } from "../../application/store/store";
import { Drawer, Input } from "../../shared";
import {observer} from 'mobx-react-lite'

const Auth = () => {
    const { store } = useStore()

    return <>
        <Drawer />
        <button onClick={() => {
            store.setLight(!store.light)
            console.log(store.light)
        }
        }>toggle</button>
        <Input height={'200px'} width={'200px'} />
    </>
}

export default observer(Auth)