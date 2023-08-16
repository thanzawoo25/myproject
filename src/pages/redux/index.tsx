import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  decrement,
  fetchContent,
  increment,
} from "@/store/slices/counterSlice";
import { Box, Button } from "@mui/material";

const ReduxConcepts = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <Box>
      <h1>{count}</h1>
      <Button
        variant="contained"
        sx={{ mr: 1 }}
        onClick={() => dispatch(decrement())}
      >
        Decremant(-)
      </Button>
      <Button
        variant="contained"
        sx={{ mr: 1 }}
        onClick={() => dispatch(increment(100))}
      >
        increment(+)
      </Button>
      <Button
        variant="contained"
        sx={{ mr: 1 }}
        onClick={() => dispatch(fetchContent())}
      >
        fetch data
      </Button>
    </Box>
  );
};
export default ReduxConcepts;
