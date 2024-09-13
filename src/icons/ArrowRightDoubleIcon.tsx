import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowRightDoubleIcon({
  iconName = 'arrow-right-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
