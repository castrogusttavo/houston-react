import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CinnamonRollIcon({
  iconName = 'cinnamon-roll',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
