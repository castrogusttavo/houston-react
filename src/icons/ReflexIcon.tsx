import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ReflexIcon({ iconName = 'reflex', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
