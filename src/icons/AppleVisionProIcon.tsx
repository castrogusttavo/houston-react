import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AppleVisionProIcon({
  iconName = 'apple-vision-pro',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
