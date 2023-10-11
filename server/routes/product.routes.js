import {Router} from 'express'
import {deleteProduct, getProducts, postProduct, updateProduct} from '../controllers/product.controller.js'

const router = Router()

router.get('/',getProducts)

router.post('/', postProduct)

router.delete('/',deleteProduct)

router.patch('/',updateProduct)

export default router