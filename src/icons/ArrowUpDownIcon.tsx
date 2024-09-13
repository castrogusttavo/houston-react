import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowUpDownIcon({
  iconName = 'arrow-up-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
