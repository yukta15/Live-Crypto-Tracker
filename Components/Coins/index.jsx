import Link from "next/link";
import styles from "./coin.module.css";


export default function Coin({
 id,
 name,
 src,
 symbol,
 current_price,
 total_volume,
 market_cap,
 price_change_24h,
 price_change_percentage_24h,
}) {
 return (
   <Link href={`/coin/${id}`} passHref>
     <div className={styles.coin_container}>
       <div className={styles.coin_row}>
         {/* Coin Image and Name */}
         <div className={styles.coin}>
           <img src={src ?? "/placeholder.png"} alt={name ?? "Unknown Coin"} className={styles.coin_img} />
           <h1 className={styles.coin_h1}>{name ?? "N/A"}</h1>
           <p className={styles.coin_symbol}>{symbol ?? "N/A"}</p>
         </div>


         {/* Coin Data */}
         <div className={styles.coin_data}>
           <p className={styles.coin_price}>₹ {current_price?.toLocaleString() ?? "N/A"}</p>
           <p className={styles.coin_volume}>₹ {total_volume?.toLocaleString() ?? "N/A"}</p>


           {/* Conditional Coloring for Price Change */}
           <p className={`${styles.coin_percent} ${price_change_24h < 0 ? styles.red : styles.green}`}>
             {price_change_percentage_24h?.toFixed(2) ?? "0.00"} %
           </p>


           <p className="market_cap">
             Mkt Cap: ₹ {market_cap?.toLocaleString() ?? "N/A"}
           </p>
         </div>
       </div>
     </div>
   </Link>
 );
}


