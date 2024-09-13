import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DispleasedIcon({
  iconName = 'displeased',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
