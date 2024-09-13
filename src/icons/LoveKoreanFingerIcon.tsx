import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LoveKoreanFingerIcon({
  iconName = 'love-korean-finger',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
