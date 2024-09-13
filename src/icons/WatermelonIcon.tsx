import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WatermelonIcon({
  iconName = 'watermelon',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
