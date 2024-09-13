import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RefrigeratorIcon({
  iconName = 'refrigerator',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
