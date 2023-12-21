import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./Reducer2";

const Counter2 =()=>
{
    const Number = useSelector((state)=>state.value);
    const dispatch = useDispatch();
    return(
        <div>
              <p>number :{Number}</p>
              <button onClick={() => dispatch(add())}>ADD TO CART</button><br/>
              <button onClick={() => dispatch(remove())}>REMOVE</button>
        </div>
    )
}
export default Counter2;