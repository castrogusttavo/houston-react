import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UnfoldMoreIcon({
  iconName = 'unfold-more',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
