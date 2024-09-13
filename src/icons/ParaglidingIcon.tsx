import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ParaglidingIcon({
  iconName = 'paragliding',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
