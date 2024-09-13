import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NThRootSquareIcon({
  iconName = 'n-th-root-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
