import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HeadphonesIcon({
  iconName = 'headphones',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
