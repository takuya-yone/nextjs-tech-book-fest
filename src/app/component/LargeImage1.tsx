import Image from 'next/image'

export default function LargeImage1() {
  return (
    <Image
      //最適化前
      src="/large_image_1.jpg"
      //最適化後
      // src="/optimized/large_image_1.jpg"
      width={'300'}
      height={'300'}
      alt="large_image_1"
    />
  )
}
