import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TrampolineIcon({
  iconName = 'trampoline',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
