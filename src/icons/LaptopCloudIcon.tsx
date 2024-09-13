import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LaptopCloudIcon({
  iconName = 'laptop-cloud',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
