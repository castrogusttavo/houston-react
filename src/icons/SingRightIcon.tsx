import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SingRightIcon({
  iconName = 'sing-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
