import { motion } from "framer-motion";
import { Order } from "../components/Order";
import { Link } from "react-router-dom";

function Orders(props) {
  const { orderList = [] } = props;

  return (
    <motion.div
    className="container"
    initial={{ opacity:0.3 }} // начальное положение по горизонтали (левая граница экрана)
    animate={{  opacity:1 }}     // положение, к которому анимировать (нулевое смещение)
    exit={{  opacity: 0.3}}     // положение при выходе (левая граница экрана)
    transition={{  duration:0.75 , ease:'easeIn'}}
    >
        <div className="orders" style={!(orderList.length) ? {display:'flex', flexDirection:'column', gap:'1.5rem', alignItems:'center', justifyContent:'center'} : null}>
          {orderList.length ? (
            <>
              <h2 className="title" style={{marginBottom:'1rem'}}>Список заказов</h2>
              <div className="order_list">
                {orderList.map((el) => (
                  <Order array={el} />
                ))}
              </div>
            </>
          ) : (
            <div className="empty">
            <svg className="emptySVG"
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 403 512.4"
            >
              <path
                fill-rule="nonzero"
                fill="#108778"
                d="M18.67 114.75h85.03v-17.3c0-26.81 10.97-51.18 28.62-68.83S174.33 0 201.15 0c26.81 0 51.19 10.97 68.84 28.62 17.65 17.65 28.61 42.02 28.61 68.83v17.3h85.73c5.15 0 9.81 2.13 13.17 5.49l.91 1.02c2.86 3.3 4.59 7.59 4.59 12.16v311.99c0 18.39-7.55 35.15-19.7 47.29-12.14 12.14-28.9 19.7-47.29 19.7H66.98c-18.35 0-35.12-7.56-47.28-19.72C7.55 480.58 0 463.83 0 445.41V133.42c0-5.14 2.11-9.83 5.48-13.19 3.36-3.37 8.05-5.48 13.19-5.48zm129.71 181.38c-5.02-5.01-5.02-13.16 0-18.17 5.01-5.02 13.16-5.02 18.17 0l34.95 34.94 34.95-34.94c5.01-5.02 13.16-5.02 18.17 0 5.02 5.01 5.02 13.16 0 18.17l-34.94 34.95 34.94 34.94c5.02 5.02 5.02 13.16 0 18.18-5.01 5.01-13.16 5.01-18.17 0l-34.95-34.95-34.95 34.95c-5.01 5.02-13.16 5.02-18.18 0-5.01-5.01-5.01-13.16 0-18.17l34.95-34.95-34.94-34.95zm-20.92-181.38h147.38v-17.3c0-20.25-8.29-38.68-21.65-52.03-13.36-13.36-31.79-21.66-52.04-21.66s-38.68 8.3-52.03 21.66c-13.36 13.35-21.66 31.78-21.66 52.03v17.3zm-23.76 46.09v-22.31H23.78v306.88c0 11.86 4.88 22.65 12.71 30.48 7.81 7.87 18.62 12.72 30.49 12.72h269.03c11.83 0 22.64-4.89 30.48-12.72 7.84-7.84 12.73-18.65 12.73-30.48V138.53H298.6v22.56c8.82 4.48 14.86 13.64 14.86 24.21 0 14.99-12.15 27.15-27.15 27.15-14.99 0-27.15-12.16-27.15-27.15 0-10.9 6.42-20.29 15.68-24.62v-22.15H127.46v22.4c8.99 4.42 15.18 13.67 15.18 24.37 0 14.99-12.15 27.15-27.15 27.15-14.99 0-27.14-12.16-27.14-27.15 0-10.77 6.26-20.07 15.35-24.46z"
              />
            </svg>
            <h3>У вас нет заказов</h3>
            <Link to='/' className="default_btn">На главную
            </Link>
            </div>
          )}
        </div>
    </motion.div>
  );
}

export { Orders };
