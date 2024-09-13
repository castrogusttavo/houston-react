import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowUpDoubleIcon({
  iconName = 'arrow-up-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
