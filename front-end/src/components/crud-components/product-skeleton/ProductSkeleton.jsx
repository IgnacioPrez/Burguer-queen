import { Skeleton, Card, CardContent } from '@mui/material'

const ProductSkeleton = () => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', gap: '20px', paddingLeft: '66px' }}>
      <Skeleton variant='rectangular' width={50} height={50} />
      <CardContent>
        <Skeleton variant='rectangular' width={900} height={60} />
      </CardContent>
    </Card>
  )
}

export default ProductSkeleton
