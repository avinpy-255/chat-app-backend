
import './App.css'
import { useRecoilState, useRecoilValue, RecoilRoot } from 'recoil'
import { countAtom } from './components/store/atoms/count'

function App() {


  return (
    <>
    <RecoilRoot>
    <Count/>
    </RecoilRoot>
     
    </>
  )
}

function Count(){
  return <div>
    <Countrender/>
    <Button/>
  </div>
}

function Countrender() {
  const count = useRecoilValue(countAtom)

  return <div>
    {count}
  </div>
}

function Button(){
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
    <button onClick={() => setCount(count - 1)}>
      Decrement
    </button>
  </div>

}

export default App
