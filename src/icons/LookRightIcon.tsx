import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LookRightIcon({
  iconName = 'look-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
