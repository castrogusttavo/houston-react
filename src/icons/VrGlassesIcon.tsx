import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VrGlassesIcon({
  iconName = 'vr-glasses',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
