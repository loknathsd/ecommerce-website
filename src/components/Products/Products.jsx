import Logo from '../../assets/headphones_b_2.webp'
import Product from '../Product/Product';


const products = [
    {
        id:1,
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    },
    {
        id:2,
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    },
    {
        id:3,
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    },
    {
        id:4,
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    },
    {
        id:5,
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    }, {
        id:6,
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    }
]
const Products = () => {
    return (
        <div className='container text-center mx-auto'>
            <div className='mt-20 mb-10 text-[#324d67]'>
                <h1 className='text-4xl font-bold mb-2 '>Best Seller Products</h1>
                <p>speaker There are many variations passages</p>
            </div>
            <div className='grid grid-cols-4 gap-4 justify-items-center'>
               {
                products.map(pd=><Product  pd={pd} key={pd.id} />)
               }
            </div>
        </div>
    );
};

export default Products;