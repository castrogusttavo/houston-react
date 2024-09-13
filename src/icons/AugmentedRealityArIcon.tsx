import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AugmentedRealityArIcon({
  iconName = 'augmented-reality-ar',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
