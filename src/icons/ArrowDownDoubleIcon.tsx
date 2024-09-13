import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowDownDoubleIcon({
  iconName = 'arrow-down-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
