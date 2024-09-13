import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PokemonIcon({ iconName = 'pokemon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
