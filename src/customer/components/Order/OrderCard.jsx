import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-sm shadow-black hover:shadow-2xl '>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1Px94vFl24Z8hODQ0OZX7dUo1pLajIJQ-w&s" alt="" />
                <div className='ml-5 '>
                    <p className='space-y-2'>Mens shirts Camisa Masculina Long Sleeve Shirt Men Korean Slim Design Formal</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                </div>
            </div>
        </Grid>

        <Grid item xs={2}>
            <p>₹1299</p>
        </Grid>

        <Grid item xs={4}>
           {true && <div> <p>
            <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                <span>
                    Delivered On March 03
                </span>
               
            </p>

            <p className='text-xs'>
                Your Item Has Been Delivered
            </p>
            </div>}
          { false && <p>
                <span>
                    Expected Delivery On March 03
                </span>
            </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
