import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NThRootCircleIcon({
  iconName = 'n-th-root-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
