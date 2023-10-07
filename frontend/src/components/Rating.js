import { Rating, Typography } from '@mui/material';

const Ratings = ({value, setValue}) => {
  
  return (
    <>
    <Rating
      name="simple-controlled"
      sx={{color:'#0DCCB1'}}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
    <Typography
      marginLeft={1}
      fontSize={18}
      color={'#0DCCB1'}
    >
      {value}/5
    </Typography>
    </>
  )
}

export default Ratings