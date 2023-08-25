import "../css/widgets.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const Widget = ({type}) => {

    let data;

    const amount=100;
    const diff=20;
    if(type === "user"){
        data={
            title:"Products",
            isMoney:false,
            link:"See all products",
            icon:(
                <ProductionQuantityLimitsIcon  className="icons"/>
            )
        }
    }

    if(type === "order"){
        data={
            title:"ORDERS",
            isMoney:false,
            link:"See all orders",
            icon:(
                <ShoppingCartIcon className="icons"/>
            )
        }
    }

    if(type === "earnings"){
        data={
            title:"Earn",
            isMoney:true,
            link:"See all earnings",
            icon:(
                <AttachMoneyIcon className="icons"/>
            )
        }
    }

  return (
    <div className="widget">
      <div className="left">
        <span className="widgettitle">{data.title}</span>
        <span className="counter">
            {data.isMoney && "$"}{amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
            <ArrowDropUpIcon/>
        {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
