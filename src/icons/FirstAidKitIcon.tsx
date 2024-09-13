import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FirstAidKitIcon({
  iconName = 'first-aid-kit',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
