import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowHorizontalIcon({
  iconName = 'arrow-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
