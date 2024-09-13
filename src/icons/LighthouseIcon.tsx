import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LighthouseIcon({
  iconName = 'lighthouse',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
