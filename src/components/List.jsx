import React from 'react';

const butterChickenLink = 'https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Butter-chicken.jpg';
const sushiLink = 'https://s3-media0.fl.yelpcdn.com/bphoto/hyXoHqyUePwNxarPHn5Ntw/o.jpg';
const pizzaLink = 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg';


const List = () => {
    return (
    <ul style={{color: "blue"}}>
        <li>Butter Chicken</li>
        <img src={butterChickenLink} alt="Butter Chicken Img"></img>
        <li>Sushi</li>
        <img src={sushiLink} alt="Sushi Img"></img>
        <li>Pizza</li>
        <img src={pizzaLink} alt="Pizza Img"></img>
  </ul>);
}

export default List;